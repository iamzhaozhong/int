export default function AboutPage() {
	return (
		<div className="relative py-16 bg-white overflow-hidden">
			<div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
				<div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
					<svg
						className="absolute top-12 left-full transform translate-x-32"
						width={404}
						height={384}
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
							</pattern>
						</defs>
						<rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
					</svg>
					<svg
						className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
						width={404}
						height={384}
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="f210dbf6-a58d-4871-961e-36d5016a0f49"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
							</pattern>
						</defs>
						<rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
					</svg>
					<svg
						className="absolute bottom-12 left-full transform translate-x-32"
						width={404}
						height={384}
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="d3eb07ae-5182-43e6-857d-35c643af9034"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
							</pattern>
						</defs>
						<rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
					</svg>
				</div>
			</div>
			<div className="relative px-4 sm:px-6 lg:px-8">
				<div className="text-lg max-w-prose mx-auto">
					<h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              About This Project
            </span>
						<span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The Ideas Behind INT.
            </span>
					</h1>
					<p className="mt-8 text-xl text-gray-500 leading-8">
						The name that was given to this project was INT. INT stands for integer, but it has also meant for something more than just numbers. I hope this project could inspire some to realize that things can be embedded in those small details.
					</p>
				</div>
					<h2>Why?</h2>
					<blockquote>
						<p>
							“a part of the disenchantment is due to the fact that math doesn’t seem to make sense; its linguistic structure is clumsy, its basic rules seem arbitrary and complicated.” From Outliers by Malcom Gladwell
						</p>
					</blockquote>
					<p>
						Regularity vs irregular composistion of langauge that translated into numbers.
					</p>
				</div>
			</div>
	)
}