import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    let errEl = <p>Unexpected error</p>;
    if (isRouteErrorResponse(error)) {
        errEl = (
            <>
                <h2>{error.status}</h2>
                <p>
                    <i>{error.statusText}</i><br />
                    {error.data?.message}
                </p>
            </>
        )
    }

    return (
        <>
            <h1>Error</h1>

            {errEl}
        </>
    )
}