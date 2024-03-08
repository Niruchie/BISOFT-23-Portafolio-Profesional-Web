import { ReactElement, ReactNode, createContext, createRef, useContext } from 'react';

const initial = ({
	Content: createRef<HTMLDivElement>(),
	Home: createRef<HTMLDivElement>(),
	Profile: createRef<HTMLDivElement>(),
	ParallaxImage: createRef(),
	Tools: createRef<HTMLDivElement>(),
	Footer: createRef<HTMLDivElement>()
});

const NavigationContext = createContext(initial);

export default function NavigationProvider({ children }: { children: ReactNode }): ReactElement {
	return (
		<NavigationContext.Provider value={initial}>
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