import { sanityFetch } from "@/sanity/lib/fetch";
import { latestPostsByCategoryQuery } from "@/sanity/lib/queries";
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
    category: string;
    title?: string;
    subtitle?: string;
}

export async function LatestPostsCarousel({ category, title, subtitle }: LatestPostsCarouselProps) {
    const posts = await sanityFetch<Post[]>({
        query: latestPostsByCategoryQuery,
        params: { category },
    });

    if (!posts || posts.length === 0) {
        return (
            <div className="py-12 text-center">
                <p>No posts found for this category yet.</p>
            </div>
        );
    }

    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-8">
                        {title && <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>}
                        {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
                    </div>
                )}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {posts.map((post) => (
                            <CarouselItem key={post._id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <PostCard post={post} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
} 