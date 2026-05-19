"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "SQL",
    "Git",
    "UI/UX Design",
    "3D Modeling",
    "Motion Design",
    "Visual Storytelling",
    "Agile Methodologies",
];

export function CyclingSkills() {
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCurrentSkillIndex((currentIndex) => 
                currentIndex === skills.length - 1 ? 0 : currentIndex + 1
            );
        }, 1800); // Change skill every 1.8 seconds

        return () => window.clearInterval(interval);
    }, []);

    const currentSkill = skills[currentSkillIndex];

    return (
        <div className="mt-4 flex min-h-8 items-center text-xl font-medium text-muted-foreground sm:text-2xl">
            <span className="mr-2">I love</span>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentSkill}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-foreground text-2xl font-extrabold"
                >
                    {currentSkill}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}