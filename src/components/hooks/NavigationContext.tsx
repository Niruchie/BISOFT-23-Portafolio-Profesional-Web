import React, { createContext, createRef, useContext, useRef } from 'react';

const initial = ({
	Content: createRef<HTMLDivElement>(),
	Home: createRef<HTMLDivElement>(),
	Profile: createRef<HTMLDivElement>(),
	ParallaxImage: createRef(),
	Tools: createRef<HTMLDivElement>(),
	Footer: createRef<HTMLDivElement>()
});

const NavigationContext = createContext(initial);


export default function NavigationProvider({ children }: { children: React.ReactNode }) {


	return (
		<NavigationContext.Provider
			children={children}
			value={initial}
		/>
	);
};

export function useNavigationContext() {
	const context = useContext(NavigationContext);
	if (!context)
		throw new Error('useNavigation must be used within a NavigationProvider');
	return context;
};