import { useMeasure } from '@uidotdev/usehooks';
import { ReactElement, ReactNode, createContext, createRef, useContext } from 'react';

const initial = ({
	Content: createRef<HTMLDivElement>(),
	Home: createRef<HTMLDivElement>(),
	Profile: createRef<HTMLDivElement>(),
	ParallaxImage: createRef(),
	Tools: createRef<HTMLDivElement>(),
	Projects: createRef<HTMLDivElement>(),
	Footer: createRef<HTMLDivElement>(),

	Navigation: {
		ref: (instance: Element) => instance.normalize(),
		height: 0,
		width: 0,
	}
});

const NavigationContext = createContext(initial);

export default function NavigationProvider({ children }: { children: ReactNode }): ReactElement {
	const [ref, { width, height }] = useMeasure();

	const clone = { ...initial };
	clone.Navigation.ref = ref;
	clone.Navigation.width = width;
	clone.Navigation.height = height;

	return (
		<NavigationContext.Provider value={clone}>
			{children}
		</NavigationContext.Provider>
	);
}

export function useNavigationContext() {
	const context = useContext(NavigationContext);
	if (!context)
		throw new Error('useNavigation must be used within a NavigationProvider');
	return context;
}