import StateMachine from '../lib/StateMachine.js';
import Input from '../lib/Input.js';

export const canvas = document.createElement('canvas');
export const context =
	canvas.getContext('2d') || new CanvasRenderingContext2D();
export const CANVAS_WIDTH = 2000;
export const CANVAS_HEIGHT = 720;

const resizeCanvas = () => {
	const scaleX = window.innerWidth / CANVAS_WIDTH;
	const scaleY = window.innerHeight / CANVAS_HEIGHT;
	const scale = Math.min(scaleX, scaleY); // Maintain aspect ratio

	canvas.style.width = `${CANVAS_WIDTH * scale}px`;
	canvas.style.height = `${CANVAS_HEIGHT * scale}px`;
};

// Listen for canvas resize events
window.addEventListener('resize', resizeCanvas);

resizeCanvas(); // Call once to scale initially

export const input = new Input(canvas);
export const stateMachine = new StateMachine();

/**
 * The physics engine we're going to use for this game.
 * We're not importing it anywhere because it is declared globally in index.html.
 *
 * @see https://brm.io/matter-js
 */
// @ts-ignore
export const matter = Matter;

/**
 * The Matter.Engine module contains methods for creating and manipulating engines.
 * An engine is a controller that manages updating the simulation of the world.
 *
 * @see https://brm.io/matter-js/docs/classes/Engine.html
 */
export const engine = matter.Engine.create();

/**
 * The root Matter.Composite instance that will contain all bodies,
 * constraints and other composites to be simulated by this engine.
 *
 * @see https://brm.io/matter-js/docs/classes/Engine.html#property_world
 */
export const world = engine.world;
