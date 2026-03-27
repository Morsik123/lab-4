function Education() {
    return (
        <section>
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">Education</h2>
            <div className="relative">
                <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">Lviv Polytechnic National University</h3>
                    <span className="text-xs font-mono text-gray-400">2023 – 2027</span>
                </div>
                <p className="text-indigo-600 font-medium text-sm mb-2">Bachelor of Cybersecurity</p>
                <p className="text-gray-600 leading-relaxed text-sm border-l-2 border-gray-100 pl-4 italic">
                    Focusing on information security, cryptography, and network protection while integrating digital art techniques into user interface security.
                </p>
            </div>
        </section>
    );
}

export default Education;