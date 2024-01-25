import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../Container";
import { companiesArr } from "@/settings/companies";
import { animations } from "@/settings/animatios";

const CompaniesScreen = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            className="py-12 grid gap-6 z-10"
        >
            <Container>
                <div>
                    <h1 className='text-white text-2xl text-center'>Мы работем только с лучшими изготовителями запчастей</h1>
                </div>
            </Container>
            <div className="bg-zinc-950 shadow-[inset_0px_0px_50px_1px_rgb(22,22,22)]">
                <Container>
                    <div className="py-12 grid gap-2 grid-cols-auto-fill-132 justify-items-center">
                        {companiesArr.map((item, i) => (
                            <motion.div variants={animations['fadeDown']} custom={i + 2.2} key={i} className="overflow-hidden rounded-sm">
                                <Image src={item} alt="logo" />
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </div>
        </motion.section>
    );
}

export default CompaniesScreen;