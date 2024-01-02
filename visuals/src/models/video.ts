import { z } from "zod";

const FilmSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
  total_results: z.number(),
});

const VideoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  image: z.string(),
  duration: z.number(),
  video_files: z.array(
    z.object({
      id: z.number(),
      quality: z.string(),
      file_type: z.string(),
      width: z.number(),
      height: z.number(),
      link: z.string(),
    })
  ),
  blurredDataUrl: z.string().optional(),
});

export const FilmWithVideosSchema = FilmSchema.extend({
  videos: z.array(VideoSchema),
});

export type Video = z.infer<typeof VideoSchema>;
export type FilmRes = z.infer<typeof FilmWithVideosSchema>;
