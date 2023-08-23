interface Props  {
    error: string
};

export function ErrorMessage({error}: Props) {
    return (
        <h1 className="text-center text-red-600">{error.toUpperCase()}</h1>
    );
};