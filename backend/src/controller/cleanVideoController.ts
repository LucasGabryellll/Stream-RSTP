import findRemoveSync from 'find-remove';

interface Props {
    path: string;
    timer: number;
    seconds: number
}

function startClear({ path, timer, seconds }: Props) {
    setInterval(() => {
        findRemoveSync(path, { age: { seconds }, extensions: '.ts' });
    }, timer);
}

export { startClear };