function Header() {
    return (
        <header className="bg-slate-900 text-white p-12 text-center md:text-left border-b-4 border-indigo-500">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">Egor Masyuk</h1>
            <div className="mt-4 flex flex-col md:flex-row gap-4 text-sm text-slate-300 font-mono">
                <span className="flex items-center gap-2">Lviv, Ukraine</span>
                <span className="hidden md:inline">|</span>
                <span>yehor.masiuk.kb.2023@lpnu.ua</span>
                <span className="hidden md:inline">|</span>
                <span>Digital Artist & Security Student</span>
            </div>
        </header>
    );
}

export default Header;