"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HumanPoseArticle() {
    return (
        <main className="min-h-screen bg-black text-foreground">
            <div className="py-24 px-6 md:px-24 max-w-5xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all mb-12">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-bold tracking-widest uppercase">Back to Home</span>
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        Human Pose Comparison and Action Scoring using Deep Learning, OpenCV & Python
                    </h1>

                    <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
                        <a
                            href="https://github.com/kr1210/Human-Pose-Compare"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent rounded-full text-accent hover:bg-accent hover:text-background transition-all"
                        >
                            <ExternalLink className="w-4 h-4" />
                            View on GitHub
                        </a>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Pose Estimation is one of the more elegant applications of neural networks and is startlingly accurate and sometimes, seems like something right out of science fiction.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            For Instance, check out Google's Move Mirror, an in-browser application that estimates the user's pose in real time and then displays a movie still with the actor holding the same pose.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            When I glanced over it, however, I got an idea. What if the same methodology could be used to compare the same actions performed by two people? This technology could then be used to teach people over remote view! I got to work immediately and tried to reverse engineer the techniques used by Google.
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">The Challenge</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            I found, to my disappointment, a few Tensorflow.js tutorials and theories on the same and nothing in python. This was understandable as it was an in-browser application and so, I decided to port the code to mighty Python. A few sessions of research showed me that they were using Posenet, a fast yet accurate model, for estimating pose.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            The Objective was simple: I wanted to go one step ahead and compare a whole action such as a punch or a kick with an image and tell me the extend to which it was correct.
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">The Model</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            As I stated earlier, Google Mirror uses PoseNet, a deep learning model which specifies 17 points on the human body. I found a good python implementation of it here.
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Defining Similarity</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            The next challenge was defining similarity. When we think about the problem, we see that there are many uncertainties to be addressed: humans can have different heights and body shapes, they might be in different parts in the picture: one person may have been standing close to the camera, another might have been faraway. All these problems have to be solved in order to output a correct result.
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-4 text-accent">Key Solutions:</h3>
                        <ul className="list-disc list-inside space-y-3 text-slate-400 mb-8">
                            <li><strong className="text-white">New Bounding Box:</strong> From the model output, we get the co-ordinates of the 17 key-points on a person's body. This information can be used to create a new bounding box which tightly covers the person in the picture.</li>
                            <li><strong className="text-white">Normalization:</strong> In order to account for the size inconsistencies, we perform L2 normalization of the points in order to transform it into a unit vector.</li>
                        </ul>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Cosine Similarity</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Now that we have standardized the pose vectors, it is time to choose a similarity measure. I chose cosine similarity for this particular instance, mainly because we are working with vectors.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            The 17 key-points are converted into a vector and plotted in high dimensional space. This vector plotting is compared to another vector plot from our benchmark image. The direction of vectors here are an indication of the similarity of the poses.
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Drawbacks of Initial Approach</h2>
                        <ul className="list-disc list-inside space-y-3 text-slate-400 mb-8">
                            <li>The algorithm does not take into account the time taken to perform the activity</li>
                            <li>There is no scope of attaining a 100 percent score since the average is taken against one picture</li>
                        </ul>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Dynamic Time Warping (DTW)</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Even though it sounds like a sci-fi method of time travel, it really isn't. It is just a method used in comparing sequences and graphs of different lengths. It matches the different troughs and crests in a graph using one to many matching and such, resulting in synced up frames on its own.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            This method seemed ideal for my use case, as I had similar graphs for each of the 17 key-points as the action was performed. I could then use DTW to compare these graphs and get 17 scores for each of the 17 key-points. An average of these 17 scores could be then taken as the total score.
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Future Improvements</h2>
                        <ul className="list-disc list-inside space-y-3 text-slate-400 mb-8">
                            <li><strong className="text-white">Automation:</strong> Recognition of action performed and orientation automatically</li>
                            <li><strong className="text-white">Confidence Scores:</strong> Using confidence scores returned by Posenet for more efficient scoring</li>
                            <li><strong className="text-white">Point Specification:</strong> According to the action to be performed, specific points can be used to increase accuracy</li>
                            <li><strong className="text-white">Feedback System:</strong> Providing feedback to users on which body part's movement needs correction</li>
                        </ul>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">References</h2>
                        <ul className="space-y-2 text-accent">
                            <li>
                                <a href="https://medium.com/tensorflow/move-mirror-an-ai-experiment-with-pose-estimation-in-the-browser-using-tensorflow-js-2f7b769f9b23" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Move Mirror - TensorFlow Blog
                                </a>
                            </li>
                            <li>
                                <a href="https://towardsdatascience.com/dynamic-time-warping-3933f25fcdd" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Dynamic Time Warping - Towards Data Science
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10">
                        <Link href="/" className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm font-bold tracking-widest uppercase">Back to Home</span>
                        </Link>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}
