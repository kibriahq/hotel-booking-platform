"use client";
import { useEffect, useRef } from 'react'
import { CalendarDays, MapPin, Users } from "lucide-react";

const SearchBar = () => {
    const dateRef = useRef(null);

    return (
        <div
            className="glass-effect rounded-md sm:rounded-full px-2 premium-shadow flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 max-w-5xl mx-auto border border-white/40 bg-accent text-text-muted py-4 sm:py-2">
            <div className="flex-1 py-2 sm:py-0 flex items-center px-lg space-x-md w-full sm:w-auto">
                <MapPin />
                <input
                    className="bg-transparent border-none focus:ring-0 focus:outline-none text-on-surface font-label-md w-full placeholder:text-text-muted"
                    placeholder="Where are you going?" type="text" />
            </div>
            <div className="w-px h-8 bg-outline-variant hidden sm:block"></div>
            <div className="flex-1 py-2 sm:py-0 flex items-center px-lg space-x-md w-full sm:w-auto">
                <CalendarDays />
                <input ref={dateRef}
                    className="bg-transparent border-none focus:ring-0 focus:outline-none text-on-surface font-label-md w-full placeholder:text-text-muted"
                    placeholder="Add dates" type="text" />
            </div>
            <div className="w-px h-8 bg-outline-variant hidden sm:block"></div>
            <div className="flex-1 py-2 sm:py-0 flex items-center px-lg space-x-md w-full sm:w-auto">
                <Users />
                <input
                    className="bg-transparent border-none focus:ring-0 focus:outline-none text-on-surface font-label-md w-full placeholder:text-text-muted"
                    placeholder="Add guests" type="number" />
            </div>
            <button
                className="bg-primary text-on-primary font-label-md text-label-md px-xl py-4 rounded-full hover:bg-primary-container transition-all active:scale-95 shadow-lg w-full sm:w-auto flex items-center justify-center space-x-2">
                <span>Search Now</span>
            </button>
        </div>
    )
}

export default SearchBar