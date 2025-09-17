import React from 'react';
import { getSupabase } from './supabaseClient.js';

const AuthContext = React.createContext({ session: null, user: null });

export function AuthProvider({ children }) {
  const [session, setSession] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session || null);
      setUser(data.session?.user || null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
      setUser(sess?.user || null);
    });
    return () => {
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  const value = React.useMemo(() => ({ session, user }), [session, user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
