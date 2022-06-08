import React from "react"
import { Icon } from '@iconify/react';

export default function Navbar() {
    return (
        <nav>
            <form>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search courses or tutors"
                    />
                    <i class="bi bi-search"></i>
                </div>

                <div className="nav-links">
                    <Icon icon="clarity:home-line" color="black" />
                </div>
            </form>
        </nav>
    )
}