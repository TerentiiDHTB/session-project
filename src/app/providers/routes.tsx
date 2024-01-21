import React from "react";
import {Main} from "@/pages/main/";
import {FormPage} from "@/pages/formPage";

interface Route {
    path: string,
    element: React.ReactNode
}

export const routes: Route[] = [
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/formpage",
        element: <FormPage/>
    },
    {
        path: "/*",
        element: <div>404....</div>
    }
]