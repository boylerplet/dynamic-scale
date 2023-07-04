import React, { ReactElement, ReactNode } from 'react';
import './font.css';

type AppProps = {
	labels?: Boolean;
	half?: Boolean;
	start?: string;
	pressed?: Array<string | number | boolean>;
	color_black?: string;
	color_white?: string;
	width: string;
};

const scale: Array<string> = [
	'A',
	'A#',
	'B',
	'C',
	'C#',
	'D',
	'D#',
	'E',
	'F',
	'F#',
	'G',
	'G#',
];

function Scale({
	labels = false,
	half = true,
	start = 'C',
	pressed = [],
	color_white = '#ff0055',
	color_black = '#aa0044',
	width,
}: AppProps) {
	function calcadd(num: number, i: number): number {
		return num + 90 * i;
	}
	function calcaddb(num: number, i: number): number {
		return num - 25 + 90 * (i + 1);
	}

	function fillWhite(): ReactNode {
		let imagenode: ReactNode;
		let elements: Array<ReactElement> = [];
		let startIndex = scale.indexOf(start);
		let labelCounter = 1;

		// Split pressed
		let whitePressed: Array<Array<number | string | boolean>> = [];
		let temp = startIndex;
		pressed.forEach((item) => {
			if (!scale[temp % 12].includes('#')) {
				whitePressed.push([item, scale[temp % 12]]);
			}
			temp++;
		});
		temp = startIndex;
		// Conditional loop
		for (let i: number = 0; i < (half ? 7 : 10); i++) {
			// Label logic

			i !== 0 && whitePressed[i][1] === 'C' && labelCounter++;
			elements.push(
				<>
					<rect
						x={calcadd(2, i)}
						y="2"
						width="90"
						height="300"
						fill={!whitePressed[i][0] ? '#FCFCFC' : color_white}
						stroke="#1E1E1E"
						strokeWidth="3"
					/>
					<path
						d={`M${calcadd(2 + 2, i)} 292H${calcadd(92 - 2, i)}V300.5H${calcadd(
							2 + 2,
							i
						)}V292Z`}
						fill={!whitePressed[i][0] ? '#EFEFEF' : color_white}
					/>

					{labels && (
						<text
							x={calcadd(25, i)}
							y={280}
							className="textStyles"
							fill="#1f1f22"
						>
							{`${whitePressed[i][1]}${labelCounter}`}
						</text>
					)}
				</>
			);
		}

		imagenode = elements;
		return imagenode;
	}

	function fillBlack(): ReactNode {
		let imagenode: ReactNode;
		let elements: Array<ReactElement> = [];
		let keys: Array<null | string> = [];
		let startIndex = scale.indexOf(start);

		// Split pressed
		let blackPressed: Array<number | string | boolean> = [];
		let temp = startIndex;
		pressed.forEach((item) => {
			if (scale[temp % 12].includes('#')) {
				blackPressed.push(item);
			}
			temp++;
		});

		// Scale genereation logic
		for (let i: number = 0; i < 17; i++, startIndex++) {
			if (scale[startIndex % 12].includes('#')) {
				keys.push(scale[startIndex % 12]);
			} else if (
				scale[startIndex % 12] === 'E' ||
				scale[startIndex % 12] === 'B'
			) {
				keys.push(null);
			}
		}
		console.log(keys);

		// Loop logic
		for (let i: number = 0, j: number = 0; i < (half ? 7 : 10); i++) {
			if (!keys[i]) {
				continue;
			}

			elements.push(
				<>
					<rect
						x={calcaddb(2, i)}
						y="2"
						width="50"
						height="175"
						fill={!blackPressed[j] ? '#333333' : color_black}
						stroke="#1E1E1E"
						strokeWidth="3"
					/>
					<path
						d={`M${calcaddb(2 + 1.8, i)} 167H${calcaddb(
							52 - 1.8,
							i
						)}V175.5H${calcaddb(2 + 1.8, i)}V167 Z`}
						fill={!blackPressed[j] ? '#4E4E4E' : color_black}
					/>
				</>
			);
			j++;
		}

		imagenode = elements;
		return imagenode;
	}

	return (
		<>
			<style>
				@import url('https://fonts.cdnfonts.com/css/aldo-the-apache');
			</style>
			<div
				style={{
					aspectRatio: half ? 634 / 304 : 904 / 304,
					width: width,
					position: 'absolute',
					textAlign: 'center',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontWeight: '400',
					fontSize: '50px',
					lineHeight: '50px',
					fontFamily: "'Aldo the Apache', sans-serif",
				}}
			>
				<svg
					style={{
						textAlign: 'center',
						position: 'absolute',
						height: '100%',
						width: '100%',
					}}
					id="scale"
					width={half ? 634 : 904}
					height="304"
					viewBox={`0 0 ${half ? 634 : 904} 304`}
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{fillWhite()}
					{fillBlack()}
				</svg>
			</div>
		</>
	);
}

export default Scale;
