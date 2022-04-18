import React from "react";
import SeedGenerator from "../components/SeedGenerator";
import PowerfulHintsSection from "../components/sections/PowerfulHintsSection";
import CompetitiveSection from "../components/sections/CompetitiveSection";
import QuickTurnoverSection from "../components/sections/QuickTurnoverSection";
import Head from "next/head";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Triforce Blitz</title>
            </Head>

            <SeedGenerator/>
            <PowerfulHintsSection/>
            <QuickTurnoverSection/>
            <CompetitiveSection/>
        </div>
    );
}
