import { Outlet } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingSkeleton from '@/components/Loading';
import { useState, useEffect } from "react";

export default function Layout() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);  

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingSkeleton />;
    }

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}