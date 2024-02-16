import { createClient } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";

const SupabaseContext = createContext();

const supabaseUrl = "https://jdfwluqhalfsuhrkrduz.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

export const SupabaseProvider = ({ children }) => {
  return (
    <SupabaseContext.Provider value={{ supabase: supabaseClient }}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => useContext(SupabaseContext);
