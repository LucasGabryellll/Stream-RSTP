import { Footer, Player, Container, Header } from '@/components';

import { streams } from '@/model/baseDados';

import styles from "./styles.module.css";

export default function Stream() {

    return (
        <Container>
            <Header />

            <div className={styles['content']}>

                <div className={styles['content-video']} suppressHydrationWarning={true}>
    
                    {streams.map((value, index) => (
                        <Player 
                            key={`channel-stream-${value.id}`}
                            descriptionCam={value.description}
                            url={value.url}
                        />
                    ))}

                </div>
            </div>

            <Footer />
        </Container>
    );
}