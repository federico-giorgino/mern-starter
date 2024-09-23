import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAppContext } from "@/context/app-context";
import { ArrowRight, Database, Lock, Route, Server, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="flex items-center justify-center flex-1">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              MERN<span className="text-primary">Starter</span>
            </h1>
            <p className="max-w-3xl text-xl text-muted-foreground">
              Jumpstart your full-stack development with our powerful MERN Stack
              Starter Kit. Built with TypeScript, featuring authentication and
              routing out of the box.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                to={isLoggedIn ? "/secret" : "/login"}
                className={buttonVariants({ variant: "default" })}
              >
                Secret Page
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="https://github.com/federico-giorgino/mern-starter"
                className={buttonVariants({ variant: "outline" })}
              >
                View on Github
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Card className="flex flex-col items-center rounded-lg bg-popover p-6 shadow-xs">
              <Server className="h-10 w-10 text-blue-400" />
              <h3 className="mt-4 font-semibold">Express Backend</h3>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Fast, unopinionated, minimalist web framework for Node.js
              </p>
            </Card>
            <Card className="flex flex-col items-center rounded-lg bg-popover p-6 shadow-xs">
              <Database className="h-10 w-10 text-green-400" />
              <h3 className="mt-4 font-semibold">MongoDB</h3>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Flexible and scalable document database
              </p>
            </Card>
            <Card className="flex flex-col items-center rounded-lg bg-popover p-6 shadow-xs">
              <svg
                className="h-10 w-10 text-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
              </svg>
              <h3 className="mt-4 font-semibold">TypeScript</h3>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Typed superset of JavaScript for better code quality
              </p>
            </Card>
            <Card className="flex flex-col items-center rounded-lg bg-popover p-6 shadow-xs">
              <Zap className="h-10 w-10 text-yellow-400" />
              <h3 className="mt-4 font-semibold">React + Vite</h3>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Fast and efficient frontend development
              </p>
            </Card>
            <Card className="col-span-2 flex flex-col items-center rounded-lg bg-popover p-6 shadow-xs">
              <div className="flex space-x-4">
                <Lock className="h-10 w-10 text-red-400" />
                <Route className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="mt-4 font-semibold">Authentication & Routing</h3>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Secure user authentication and efficient routing out of the box
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
