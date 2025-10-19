import React, { useEffect } from 'react'

export const Theme = () => {
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'default';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        const handleThemeChange = (e) => {
            const theme = e.target.value;
            localStorage.setItem('theme', theme);
            document.documentElement.setAttribute('data-theme', theme);
        };
        
        const themeInputs = document.querySelectorAll('input[name="theme-dropdown"]');
        themeInputs.forEach(input => {
            input.addEventListener('change', handleThemeChange);
            if (input.value === savedTheme) {
                input.checked = true;
            }
        });
        
        return () => {
            themeInputs.forEach(input => {
                input.removeEventListener('change', handleThemeChange);
            });
        };
    }, []);
    
    return (
        <div>
            <div className="dropdown  z-20">
                <div tabIndex={0} role="button" className="btn m-1">
                    Theme
                    <svg
                        width="12px"
                        height="12px"
                        className="inline-block h-2 w-2 fill-current opacity-60"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2048 2048">
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                </div>
                <ul tabIndex="-1" className="dropdown-content w-48  bg-base-300 rounded-box z-1 md:w-52 p-2 shadow-2xl">
                    <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Default"
                            value="default" />
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Retro"
                            value="retro" />
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Forest"
                            value="forest" />
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Valentine"
                            value="valentine" />
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Abyss"
                            value="abyss" />
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Cupcake"
                            value="cupcake" />
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Garden"
                            value="garden" />
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Coffee"
                            value="coffee" />
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Night"
                            value="night" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
