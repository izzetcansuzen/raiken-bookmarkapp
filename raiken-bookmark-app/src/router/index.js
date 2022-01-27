import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: () => import("../views/Home"),
    },
    {
        path:"/register",
        name: "Register",
        component: () => import("../views/Register")
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login"),
    },
    {
        path: "/addbookmark",
        name: "AddBookmark",
        component: () => import("../views/AddBookmark"),
    },
    {
        path: "/addcategory",
        name: "AddCategory",
        component: () => import("../views/AddCategory"),
    },
    {
        path: "/bookmark/:id",
        name: "Bookmark",
        component: () => import("../views/Bookmark"),
        params: true
    },
    {
        path: "/settings",
        name: "Settings",
        component: () => import("../views/settings"),
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;