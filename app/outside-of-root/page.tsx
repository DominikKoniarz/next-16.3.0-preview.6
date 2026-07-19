import { cacheLife } from "next/cache";
import Link from "next/link";

export default async function OutsideOfRootPage() {
    "use cache";

    cacheLife("hours");

    return (
        <div>
            <p>This is an outside of [locale] root</p>
            <Link href="/" className="text-blue-500">
                Go to home
            </Link>
        </div>
    );
}
