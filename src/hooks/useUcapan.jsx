import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useUcapan() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUcapan() {
      const { data, error } = await supabase
        .from('ucapan')
        .select('id, nama, ucapan, hadir, created_at')
        .order('created_at', { ascending: false });

      if (error) setError(error.message);
      else setData(data);

      setLoading(false);
    }

    fetchUcapan();
  }, []);

  return { data, loading, error };
}
