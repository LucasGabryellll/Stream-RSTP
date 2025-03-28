import { Footer, Player, Container, Header } from '@/components';

import styles from "./styles.module.css";
import { socketio } from '@/service/socket';

import { streams } from "@/model/baseDados";

export default function Stream() {
    const cam = socketio.connect();

    return (
        <Container>
            <Header />

            <div className={styles['content']}>

                <div className={styles['content-video']} suppressHydrationWarning={true}>
                    {streams.map((stream) => (
                        <Player
                            key={`stream_cam-${stream.id}`}
                            descriptionCam={stream.description}
                            url={stream.url}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </Container>
    );
}