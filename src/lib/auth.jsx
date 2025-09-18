import React from 'react';
import { getSupabase } from './supabaseClient.js';

const AuthContext = React.createContext({ session: null, user: null });

export function AuthProvider({ children }) {
  const [session, setSession] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      setLoading(false);
      return;
    }

    // Получаем текущую сессию
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session || null);
      setUser(data.session?.user || null);
      setLoading(false);
    });

    // Слушаем изменения состояния аутентификации
    const { data: sub } = supabase.auth.onAuthStateChange((event, sess) => {
      console.log('Auth state change:', event, sess);
      setSession(sess);
      setUser(sess?.user || null);
      setLoading(false);
    });

    return () => {
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  const value = React.useMemo(() => ({ session, user, loading }), [session, user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
