"use client";

import gsap from "gsap";
import { FC, useEffect, useRef } from "react";

import {
  addToFavorites,
  FavoriteTypeEnum,
  removeFromFavorites,
} from "@/lib/api/favorites";
import { Exercise, Favorite } from "@prisma/client";

import { ExerciseCard } from "./ExerciseCard";

type PropsType = {
  exercises: Exercise[];
  favorites: Favorite[];
};

export const ExercisesList: FC<PropsType> = ({ exercises, favorites }) => {
  const listRef = useRef<HTMLDivElement>(null);

  const addFavorite = (exercise: Exercise) =>
    addToFavorites({
      type: FavoriteTypeEnum.EXERCISE,
      userId: 1,
      entityId: exercise.id,
    });

  const deleteFromFavorites = async (
    itemId: string
  ): Promise<null | undefined> => {
    const foundElement = favorites.find((fav) => fav.entityId === itemId);
    if (foundElement) {
      await removeFromFavorites({ favoriteItemId: foundElement?.id });
    }
    return null;
  };

  useEffect(() => {
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    if (listRef.current) {
      const cards = listRef.current.children;

      Array.from(cards).forEach((card) => {
        const element = card as HTMLElement;

        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: 1.05,
            y: -5,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            duration: 0.3,
            ease: "power3.out",
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            y: 0,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power3.out",
          });
        });
      });
    }
  }, []);

  return (
    <div
      ref={listRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
    >
      {exercises.map((exercise, index) => (
        <ExerciseCard
          key={index}
          exercise={exercise}
          className="flex-1"
          addFavorite={addFavorite}
          deleteFromFavorites={deleteFromFavorites}
          isFavoriteItem={favorites.some(
            (fav: Favorite) => fav.entityId === exercise.id
          )}
        />
      ))}
    </div>
  );
};
