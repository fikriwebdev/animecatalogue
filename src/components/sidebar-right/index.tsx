import { Suspense } from "react";
import LatestUpdatedAnime from "./latest-updated-anime";
import SearchAnime from "./search-anime";

export default function SidebarRight() {
  return (
    <SearchAnime>
      <Suspense fallback={<p>Loading...</p>}>
        <LatestUpdatedAnime />
      </Suspense>
    </SearchAnime>
  );
}
