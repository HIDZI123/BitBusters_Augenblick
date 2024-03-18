import chromadb
from sentence_transformers import SentenceTransformer
from datasets import load_dataset
from chromadb.utils import embedding_functions
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import requests
import json

default_ef = embedding_functions.DefaultEmbeddingFunction()

client = chromadb.PersistentClient(path="D:/augenblick/data")
collection = client.get_or_create_collection(
    name="Hackathon",
    embedding_function=default_ef,
)
question = input("Enter your question: ")
dataset = load_dataset(
    "bitext/Bitext-customer-support-llm-chatbot-training-dataset",
)

# collection.add(
#     ids=[str(i) for i in range(0, 500)],  # IDs are just strings
#     documents=dataset["train"]["response"][:500],  # Access 'response' within 'train'
#     metadatas=[{"type": "response"} for _ in range(0, 500)],
# )

query_vector = default_ef([question])
res = collection.query(
    query_embeddings=query_vector,
    n_results=5,
    include=["distances", "documents"],
)
print(res["documents"][0][0])


# # # API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-v0.1"
# API_URL = "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2"
# headers = {"Authorization": f"Bearer {'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'}"}


# def query(payload):
#     response = requests.post(API_URL, headers=headers, json=payload)
#     return response.json()


# data = query(
#     {
#         "inputs": {
#             "question": "i cant put my order in the cart, help me please",
#             "context": str(results),
#         }
#     }
# )
# print(data)
# # # print(data.json()[0]['generated_text'])
# # # # print(data.json())
