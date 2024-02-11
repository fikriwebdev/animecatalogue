"use client";

import useDebounce from "@/hooks/use-debounce";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Search } from "lucide-react";
import React from "react";
import { SearchResult } from "../sidebar-right/search-anime";

function Result() {
  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search, 500);
  return (
    <div className="flex flex-col gap-4 ">
      <Input
        classNames={{
          inputWrapper:
            "bg-primary-800 group-data-[hover=true]:bg-primary-700 group-data-[focus=true]:bg-primary-700 w-[80%] text-lg sticky placeholder:text-3xl",
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
      {debouncedSearch ? <SearchResult search={debouncedSearch} /> : null}
    </div>
  );
}

export function SearchDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
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
          wrapper: "w-[100dvw] mx-0",
          base: "h-[90dvh] mx-0 mb-0 bg-primary-900 rounded-t-lg rounded-b-none",
          body: "p-2",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" />

              <ModalBody>
                <Result />
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
