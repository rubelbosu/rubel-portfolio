import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import './../styles/globals.css'
import AppNavbar from "./components/AppNavbar/AppNavbar";


export default function App({ Component, pageProps }: AppProps) {
  return (<NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="dark">
    <AppNavbar/>
    <Component {...pageProps} />
    </NextThemesProvider>
  </NextUIProvider>)
}
