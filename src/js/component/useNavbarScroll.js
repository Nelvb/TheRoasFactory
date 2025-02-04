import { useEffect } from "react";


const useNavbarScroll = (onScroll, containerRef) => {
    useEffect(() => {
        if (!containerRef.current) return;

        let lastScrollTop = 0;

        const handleScroll = () => {
            if (!containerRef.current) return;

            const scrollTop = containerRef.current.scrollTop;
            const isScrollingDown = scrollTop > lastScrollTop;

            if (window.innerWidth <= 768) { 
                if (isScrollingDown) {
                    onScroll(false); // Oculta la navbar al bajar
                } else if (scrollTop < 100) {
                    onScroll(true); // Reaparece al subir cerca del top
                }
            } else {
                onScroll(true); // 🔹 En pantallas grandes, la navbar siempre visible
            }

            lastScrollTop = scrollTop;
        };

// FUNCION PARA MANEJAR SCROLL FUERA DE LOS CONTENEDORES PRINCIPALES


        const handleGlobalScroll = (event) => {
            if (containerRef.current) {
                containerRef.current.scrollTop += event.deltaY;
            }
        };

        // 🔹 Agregar eventos
        containerRef.current.addEventListener("scroll", handleScroll);
        window.addEventListener("wheel", handleGlobalScroll);

        // 🔹 Limpiar eventos al desmontar
        return () => {
            containerRef.current?.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", handleGlobalScroll);
        };
    }, [onScroll, containerRef]);
};

export default useNavbarScroll;
