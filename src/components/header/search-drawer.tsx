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

import { Input } from "@nextui-org/input";

import { Search } from "lucide-react";
import React from "react";
import { SearchResult } from "../sidebar-right/search-anime";
import { useDebounce } from "use-debounce";

type ResultProps = {
  onClose?: () => void;
};

function Result({ onClose }: ResultProps) {
  const [search, setSearch] = React.useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full px-4">
        <Input
          classNames={{
            inputWrapper:
              "bg-primary-800 group-data-[hover=true]:bg-primary-700 group-data-[focus=true]:bg-primary-700 w-full text-lg sticky placeholder:text-3xl ",
            input: "text-base",
          }}
          startContent={<Search />}
          placeholder="Type to search"
          radius="full"
          autoFocus
          size="sm"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {debouncedSearch ? <SearchResult search={debouncedSearch} /> : null}
    </div>
  );
}

export function SearchDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        startContent={<Search className="w-4 h-4 text-primary-500" />}
        variant="flat"
        className="w-full border-1 border-primary-800 justify-start text-primary-500"
      >
        Search
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        scrollBehavior="inside"
        size="full"
        classNames={{
          wrapper: "w-full mx-0",
          base: "h-[95dvh] mx-0 mb-0 bg-primary-900 !rounded-t-xl rounded-b-none",
          body: "p-2",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" />

              <ModalBody>
                <Result onClose={onClose} />
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
