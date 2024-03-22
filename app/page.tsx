"use client";
import styles from "./page.module.scss";
import FilmsHorseApp from "./components/FilmsHorseApp/FilmsHorseApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className={styles.main}>
      <QueryClientProvider client={queryClient}>
        <FilmsHorseApp />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  );
}
