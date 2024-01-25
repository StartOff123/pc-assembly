import classNames from 'classnames';

const LoadScreen = ({ isLoad }: { isLoad: boolean }) => {
    return (
        <section
            className={classNames(
                "fixed top-0 left-0 bg-black z-50 h-full w-full flex justify-center items-center transition-all",
                !isLoad && 'pointer-events-none opacity-0'
            )}
        >
            <div className="relative flex h-16 w-16 justify-center items-center shadow-[inset_0px_0px_15px_0px_rgb(129,140,248)] rounded-full">
                <span className="absolute h-full w-full rounded-full opacity-30 bg-indigo-400 inline-flex animate-ping" />
                <p className="text-indigo-400 text-sm font-semibold">PCA</p>
            </div>
        </section>
    );
}

export default LoadScreen;