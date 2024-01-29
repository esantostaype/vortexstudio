import { TypeAnimation } from 'react-type-animation';

export const TypingText = () => {

    return (
        <TypeAnimation
            sequence={[
                'intuitivos', 2000,
                'adaptables', 2000,
                'estéticos', 2000
            ]}
            wrapper="span"
            speed={ 50 }
            repeat={Infinity}
            cursor={false}
        />
    )
}