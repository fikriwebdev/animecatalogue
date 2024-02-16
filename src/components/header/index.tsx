"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ListMenu from "../list-menu";
import { SearchDrawer } from "./search-drawer";

function MenuDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button isIconOnly variant="ghost" onClick={onOpen}>
        <Menu />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
        classNames={{
          wrapper: "w-[70vw] mb-0",
          base: "h-[100dvh] mb-0 bg-primary-900 rounded-tr-lg rounded-br-none rounded-l-none",
          body: "p-2",
        }}
        motionProps={{
          initial: {
            x: -200,
            opacity: 0,
          },
          variants: {
            enter: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              x: -200,
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" />

              <ModalBody>
                <ListMenu onClose={onClose} />
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default function Header() {
  return (
    <header className="w-full h-16 border-b  border-slate-800/50 inline-block md:hidden sticky top-0 left-0 right-0 z-[20] bg-slate-950 backdrop-blur-sm">
      <div className="w-full h-full flex items-center gap-4 container mx-auto px-4">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            width={64}
            height={64}
            alt="Anime Catalogue"
            style={{
              borderRadius: 999,
              overflow: "hidden",
            }}
          />
        </Link>
        <SearchDrawer />
        <MenuDrawer />
      </div>
    </header>
  );
}
