import { sanityFetch } from "@/sanity/lib/fetch";
import { latestPostsByCategoryQuery, latestPostsQuery } from "@/sanity/lib/queries";
import { Post } from "@/types";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import PostCard from "./PostCard";

interface LatestPostsCarouselProps {
    category?: string;
    title?: string;
    subtitle?: string;
}

export async function LatestPostsCarousel({ category, title, subtitle }: LatestPostsCarouselProps) {
    let query = latestPostsByCategoryQuery;
    if (!category) {
        query = latestPostsQuery;
    }

    const posts = await sanityFetch<Post[]>({
        query: query,
        params: { category },
    });

    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl overflow-x-hidden px-4 sm:px-6 lg:px-8">
                {/* Always render title and subtitle */}
                {(title || subtitle) && (
                    <div className="text-center mb-8">
                        {title && <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>}
                        {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
                    </div>
                )}

                {/* Render carousel only if there are posts, otherwise render a fallback message */}
                {posts.length > 0 ? (
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {posts.map((post) => (
                                <CarouselItem key={post._id} className="basis-full md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <PostCard post={post} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                ) : (
                    <div className="text-center mt-8 text-lg text-gray-600">
                        <p>No posts available at the moment.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
