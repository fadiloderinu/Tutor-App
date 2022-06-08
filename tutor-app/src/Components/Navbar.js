import React from "react"
import { Icon } from '@iconify/react';

export default function Navbar() {
    return (
        <nav >
            <form>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search courses or tutors"
                    />
                    <i class="bi bi-search"></i>
                </div>

                <div className="nav-links">
                    <a href="#" className="me-2"><Icon icon="clarity:home-line" color="#4a9eda" height="28px" /></a>
                    <a href="#"><Icon icon="fluent:backpack-20-regular" color="white" height="28px" /></a>
                    <a href="#" className="ms-2"><Icon icon="iconoir:chat-bubble" color="white" height="28px" /></a>
                </div>

                <div>
                    <a href="#"><Icon icon="line-md:account" color="white" height="28px" /></a>
                </div>
            </form>
        </nav>
    )
}