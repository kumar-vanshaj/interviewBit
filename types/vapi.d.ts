/**
 * Vapi Message Type Definitions
 *
 * This file defines the core message structures exchanged between the Vapi SDK
 * and the application during a voice session. It provides enums and interfaces
 * for various message types like transcripts, function calls, and function call results.
 *
 * These types enable strict typing for event handling and message parsing.
 */

// Types of messages that can be sent/received
enum MessageTypeEnum {
  TRANSCRIPT = "transcript",
  FUNCTION_CALL = "function-call",
  FUNCTION_CALL_RESULT = "function-call-result",
  ADD_MESSAGE = "add-message",
}

// Roles associated with a message
enum MessageRoleEnum {
  USER = "user",
  SYSTEM = "system",
  ASSISTANT = "assistant",
}

// Types of transcript states
enum TranscriptMessageTypeEnum {
  PARTIAL = "partial",
  FINAL = "final",
}

// Base interface shared by all message types
interface BaseMessage {
  type: MessageTypeEnum;
}

// Message type for voice transcript content
interface TranscriptMessage extends BaseMessage {
  type: MessageTypeEnum.TRANSCRIPT;
  role: MessageRoleEnum;
  transcriptType: TranscriptMessageTypeEnum;
  transcript: string;
}

// Message type for function call requests
interface FunctionCallMessage extends BaseMessage {
  type: MessageTypeEnum.FUNCTION_CALL;
  functionCall: {
    name: string;
    parameters: unknown;
  };
}

// Message type for function call results
interface FunctionCallResultMessage extends BaseMessage {
  type: MessageTypeEnum.FUNCTION_CALL_RESULT;
  functionCallResult: {
    forwardToClientEnabled?: boolean;
    result: unknown;
    [a: string]: unknown;
  };
}

// Message type for function call results
type Message =
  | TranscriptMessage
  | FunctionCallMessage
  | FunctionCallResultMessage;
