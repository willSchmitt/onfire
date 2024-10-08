import React from "react";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";

export function QuestionsOnFire() {
  return (
    <>
      <Accordion.Root
        type="single"
        collapsible
        className="w-full max-w-md mx-auto max-md:px-6"
      >
        <Accordion.Item value="item-1" className="border-b">
          <Accordion.Header className="w-full">
            <Accordion.Trigger className="flex justify-between items-center w-full py-3 px-4 text-left bg-slate-800 hover:bg-slate-600 focus:outline-none rounded-md">
              <span>De quanto em quanto tempo acontece a conferência?</span>
              <ChevronDownIcon className="w-5 h-5 transform transition-transform duration-300 accordion-state[open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 bg-slate-300">
            <p className="text-sm text-gray-700">
              A conferência acontece anualmente!
            </p>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2" className="border-b">
          <Accordion.Header className="w-full">
            <Accordion.Trigger className="flex justify-between items-center w-full py-3 px-4 text-left bg-slate-800 hover:bg-slate-600 focus:outline-none rounded-md">
              <span>Posso participar apenas um dia?</span>
              <ChevronDownIcon className="w-5 h-5 transform transition-transform duration-300 accordion-state[open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 bg-slate-300">
            <p className="text-sm text-gray-700">
              Claro! Teremos inscrições na hora também!
            </p>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-4" className="border-b">
          <Accordion.Header className="w-full">
            <Accordion.Trigger className="flex justify-between items-center w-full py-3 px-4 text-left bg-slate-800 hover:bg-slate-600 focus:outline-none rounded-md">
              <span>Quem pode participar?</span>
              <ChevronDownIcon className="w-5 h-5 transform transition-transform duration-300 accordion-state[open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 bg-slate-300">
            <p className="text-sm text-gray-700">
              Todos aqueles que desejam ser cheios do Espírito Santo!
            </p>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-5" className="border-b">
          <Accordion.Header className="w-full">
            <Accordion.Trigger className="flex justify-between items-center w-full py-3 px-4 text-left bg-slate-800 hover:bg-slate-600 focus:outline-none rounded-md">
              <span>Qual o objetivo do On Fire?</span>
              <ChevronDownIcon className="w-5 h-5 transform transition-transform duration-300 accordion-state[open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 bg-slate-300">
            <p className="text-sm text-gray-700">
              A Conferência More Life OnFire 2024 está chegando com o tema
              "Chegará o tempo em que não haverá mais tempo", e a vibe é trazer
              os movimentos do céu pra terra, agora! Esse é o momento de se
              conectar ao que Deus está fazendo e viver com intensidade total.
              Prepare-se para dias cheios de propósito, inspiração e muito fogo!
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
}
