"use client";
import center from "@/public/gallery/center.png";
import cloud from "@/public/gallery/cloud.png";
import cloudr from "@/public/gallery/cloudr.png";
import left from "@/public/gallery/left.png";
import right from "@/public/gallery/right.png";
import left2 from "@/public/gallery/left2.png";
import { cosmo } from "@/data/highlights";
import Image from "next/image";
import { music, dance, drama } from "@/data/gallery";
const sections = [
	{ title: "Music", data: music },
	{ title: "Dance", data: dance },
	{ title: "Drama", data: drama },
];

export default function Gallery() {
	return (
		<div className="relative min-h-screen w-full bg-[linear-gradient(90deg,#082B20_1.81%,#03523C_50.72%,#082B20_99.63%)] py-12 px-2 sm:px-4 lg:px-12">

			<Image
				src={center}
				alt="center design"
				width={700}
				height={700}
				className="hidden xl:block absolute left-1/2 top-18 -translate-x-1/2 opacity-80 pointer-events-none z-0"
				priority={false}
				loading="lazy"
			/>
			<Image
				src={left}
				alt="left mandala"
				width={300}
				height={300}
				className="hidden xl:block absolute left-0 bottom-0 opacity-80 pointer-events-none z-0"
				priority={false}
				loading="lazy"
			/>

			<Image
				src={right}
				alt="right mandala"
				width={300}
				height={300}
				className="hidden xl:block absolute right-0 bottom-350 opacity-80 pointer-events-none z-0"
				priority={false}
				loading="lazy"
			/>
      <Image
                src={left2}
                alt="left mandala 2"
                width={400}
                height={400}
                className="hidden xl:block absolute left-0 bottom-200 opacity-80 pointer-events-none z-0"
                priority={false}
                loading="lazy"
            />
	
			<Image
				src={cloud}
				alt="left cloud"
				width={400}
				height={400}
				className="hidden xl:block absolute left-0 bottom-0 opacity-80 pointer-events-none z-0"
				priority={false}
				loading="lazy"
			/>
			<Image
				src={cloudr}
				alt="right cloud"
				width={500}
				height={500}
				className="hidden xl:block absolute right-0 top-130 opacity-80 pointer-events-none z-0"
				priority={false}
				loading="lazy"
			/>
      <Image
                src={cosmo}
                alt="cosmo top"
                width={180}
                height={120}
                className="hidden xl:block absolute left-0 top-10 opacity-90 pointer-events-none z-0"
                priority={false}
                loading="lazy"
            />
            <Image
                src={cosmo}
                alt="cosmo bottom"
                width={180}
                height={120}
                className="hidden xl:block absolute right-0 bottom-0 opacity-90 pointer-events-none z-0"
                priority={false}
                loading="lazy"
            />

			<div className="max-w-7xl mx-auto relative z-10">
				{sections.map((section) => (
					<div key={section.title} className="mb-28">
						<h1 className="text-3xl md:text-5xl lg:text-7xl font-traditional text-[#FFD9A4] mb-8 text-center">
							{section.title}
						</h1>
						<div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{section.data.map(
								(img: { src: string; alt: string }, idx: number) => (
									<div
										key={idx}
										className="rounded-xl w-full shadow-lg flex items-center justify-center aspect-square overflow-hidden"
										style={{
											width: "100%",
											maxWidth: 260,
											minWidth: 120,
										}}
									>
										<Image
											src={img.src}
											alt={img.alt}
											width={260}
											height={260}
											className="object-cover w-full h-full"
											loading="lazy"
										/>
									</div>
								)
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}