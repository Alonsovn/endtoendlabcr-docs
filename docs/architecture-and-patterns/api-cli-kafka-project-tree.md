---
sidebar_label: FastAPI + CLI + Kafka Project Tree
---

# Clean Architecture FastAPI + CLI + Kafka Project Structure

```
user-management-api/
│
├── README.md
├── requirements.txt
├── requirements-cli.txt                          # CLI-specific dependencies
├── .env
├── .gitignore
├── docker-compose.yml                            # Include Kafka services
├── Dockerfile
├── Dockerfile.cli                                # Separate CLI container
│
├── src/
│   │
│   ├── __init__.py
│   │
│   ├── domain/                                    # 🏛️ DOMAIN LAYER (Core Business Logic)
│   │   ├── __init__.py
│   │   ├── entities/
│   │   │   ├── __init__.py
│   │   │   └── user.py                           # Domain entities with business rules
│   │   ├── exceptions/
│   │   │   ├── __init__.py
│   │   │   └── user_exceptions.py                # Domain-specific exceptions
│   │   └── events/                               # 🆕 Domain events
│   │       ├── __init__.py
│   │       ├── base.py                           # Base domain event
│   │       └── user_events.py                    # User domain events
│   │
│   ├── application/                               # 🎯 APPLICATION LAYER (Use Cases & Business Logic)
│   │   ├── __init__.py
│   │   ├── dtos/
│   │   │   ├── __init__.py
│   │   │   ├── user_dtos.py                      # Data Transfer Objects
│   │   │   └── message_dtos.py                   # 🆕 Message/Event DTOs
│   │   ├── interfaces/
│   │   │   ├── __init__.py
│   │   │   ├── repositories/
│   │   │   │   ├── __init__.py
│   │   │   │   └── user_repository.py            # Repository abstractions
│   │   │   └── messaging/                        # 🆕 Messaging interfaces
│   │   │       ├── __init__.py
│   │   │       ├── event_publisher.py            # Event publishing interface
│   │   │       └── message_handler.py            # Message handling interface
│   │   └── services/
│   │       ├── __init__.py
│   │       ├── user_service.py                   # Application services
│   │       └── event_service.py                  # 🆕 Event handling service
│   │
│   ├── infrastructure/                            # 🔧 INFRASTRUCTURE LAYER (External Concerns)
│   │   ├── __init__.py
│   │   ├── database/
│   │   │   ├── __init__.py
│   │   │   ├── base.py                           # SQLAlchemy base
│   │   │   ├── session.py                        # Database session
│   │   │   └── models/
│   │   │       ├── __init__.py
│   │   │       └── user_model.py                 # SQLAlchemy models
│   │   ├── repositories/
│   │   │   ├── __init__.py
│   │   │   └── user_repository.py                # Repository implementations
│   │   ├── messaging/                            # 🆕 Kafka & Messaging
│   │   │   ├── __init__.py
│   │   │   ├── kafka/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── config.py                     # Kafka configuration
│   │   │   │   ├── producer.py                   # Kafka producer
│   │   │   │   ├── consumer.py                   # Kafka consumer
│   │   │   │   └── topics.py                     # Topic definitions
│   │   │   ├── publishers/
│   │   │   │   ├── __init__.py
│   │   │   │   └── user_event_publisher.py       # User event publisher
│   │   │   └── handlers/
│   │   │       ├── __init__.py
│   │   │       └── user_message_handler.py       # User message handler
│   │   ├── config/
│   │   │   ├── __init__.py
│   │   │   └── settings.py                       # Application configuration
│   │   └── dependencies.py                       # Dependency injection
│   │
│   ├── presentation/                              # 🌐 PRESENTATION LAYER (API Controllers)
│   │   ├── __init__.py
│   │   ├── api/                                  # 🔄 Renamed for clarity
│   │   │   ├── __init__.py
│   │   │   ├── controllers/
│   │   │   │   ├── __init__.py
│   │   │   │   └── user_controller.py            # FastAPI controllers
│   │   │   ├── middleware/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── error_handler.py              # Global exception handling
│   │   │   │   └── cors.py                       # CORS configuration
│   │   │   └── schemas/
│   │   │       ├── __init__.py
│   │   │       └── responses.py                  # API response schemas
│   │   └── main.py                               # FastAPI app entry point
│   │
│   ├── cli/                                      # 🖥️ CLI LAYER (Command Line Interface)
│   │   ├── __init__.py
│   │   ├── commands/
│   │   │   ├── __init__.py
│   │   │   ├── user_commands.py                  # User CLI commands
│   │   │   └── kafka_commands.py                 # Kafka CLI commands
│   │   ├── formatters/
│   │   │   ├── __init__.py
│   │   │   ├── table_formatter.py                # Table output formatting
│   │   │   └── json_formatter.py                 # JSON output formatting
│   │   ├── validators/
│   │   │   ├── __init__.py
│   │   │   └── input_validators.py               # CLI input validation
│   │   └── main.py                               # CLI app entry point
│   │
│   └── messaging/                                # 🔄 MESSAGING LAYER (Event-Driven Architecture)
│       ├── __init__.py
│       ├── consumers/
│       │   ├── __init__.py
│       │   ├── user_consumer.py                  # User event consumer
│       │   └── base_consumer.py                  # Base consumer class
│       ├── processors/
│       │   ├── __init__.py
│       │   └── user_event_processor.py           # Event processing logic
│       └── main.py                               # Message consumer entry point
│
├── tests/                                         # 🧪 TEST LAYER
│   ├── __init__.py
│   ├── conftest.py
│   ├── unit/
│   │   ├── __init__.py
│   │   ├── domain/
│   │   │   ├── __init__.py
│   │   │   ├── entities/
│   │   │   │   └── test_user.py
│   │   │   └── events/                           # 🆕 Domain events tests
│   │   │       └── test_user_events.py
│   │   ├── application/
│   │   │   ├── __init__.py
│   │   │   └── services/
│   │   │       ├── test_user_service.py
│   │   │       └── test_event_service.py         # 🆕 Event service tests
│   │   ├── infrastructure/
│   │   │   ├── __init__.py
│   │   │   ├── repositories/
│   │   │   │   └── test_user_repository.py
│   │   │   └── messaging/                        # 🆕 Messaging tests
│   │   │       ├── test_kafka_producer.py
│   │   │       └── test_kafka_consumer.py
│   │   ├── cli/                                  # 🆕 CLI tests
│   │   │   ├── __init__.py
│   │   │   └── commands/
│   │   │       └── test_user_commands.py
│   │   └── messaging/                            # 🆕 Messaging layer tests
│   │       └── test_user_consumer.py
│   ├── integration/
│   │   ├── __init__.py
│   │   ├── test_user_endpoints.py
│   │   ├── test_kafka_integration.py             # 🆕 Kafka integration tests
│   │   └── test_cli_integration.py               # 🆕 CLI integration tests
│   └── e2e/
│       ├── __init__.py
│       ├── test_user_flow.py
│       └── test_event_flow.py                    # 🆕 Event-driven flow tests
│
├── migrations/                                    # 📦 DATABASE MIGRATIONS
│   ├── versions/
│   ├── alembic.ini
│   ├── env.py
│   └── script.py.mako
│
├── docs/                                          # 📚 DOCUMENTATION
│   ├── architecture.md
│   ├── api.md
│   ├── cli.md                                    # 🆕 CLI documentation
│   ├── kafka.md                                  # 🆕 Kafka documentation
│   └── deployment.md
│
├── scripts/                                       # 🔨 UTILITY SCRIPTS
│   ├── start-api.sh
│   ├── start-cli.sh                              # 🆕 CLI startup script
│   ├── start-consumers.sh                        # 🆕 Kafka consumers
│   ├── test.sh
│   └── migrate.sh
│
├── docker/                                        # 🐳 DOCKER CONFIGURATIONS
│   ├── api.Dockerfile
│   ├── cli.Dockerfile                            # 🆕 CLI container
│   ├── consumer.Dockerfile                       # 🆕 Message consumer container
│   └── kafka/                                    # 🆕 Kafka setup
│       ├── docker-compose.kafka.yml
│       └── kafka-setup.sh
│
└── .github/                                       # 🚀 CI/CD & GitHub Configuration
    ├── workflows/
    │   ├── api-ci.yml
    ��   ├── cli-ci.yml                            # 🆕 CLI CI/CD
    │   ├── kafka-ci.yml                          # 🆕 Kafka integration CI
    │   └── integration-tests.yml
    └── ISSUE_TEMPLATE/
        ├── bug_report.md
        └── feature_request.md
```

## 🏗️ **Architecture Layers (Updated)**

```
┌─────────────────────────────────────────────────────────────────┐
│  🖥️ CLI LAYER        🌐 PRESENTATION LAYER   🔄 MESSAGING LAYER  │ ← Level 3 (Outer)
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │                🔧 INFRASTRUCTURE LAYER                       │ │ ← Level 3 (Outer)  
│  │  ┌─────────────────────────────────────────────────────────┐  │ │
│  │  │              🎯 APPLICATION LAYER                       │  │ │ ← Level 2 (Middle)
│  │  │  ┌─────────────────────────────────────────────────────┐│  │ │
│  │  │  │             🏛️ DOMAIN LAYER                        ││  │ │ ← Level 1 (Core)
│  │  │  │  • Entities     • Events     • Exceptions          ││  │ │
│  │  │  └─────────────────────────────────────────────────────┘│  │ │
│  │  │  • Services   • DTOs   • Interfaces                    │  │ │
│  │  └─────────────────────────────────────────────────────────┘  │ │
│  │  • Repositories  • Messaging  • Database  • Config            │ │
│  └───────────────────────────────────────────────────────────────┘ │
│  • API Routes    • CLI Commands    • Event Consumers               │
└─────────────────────────────────────────────────────────────────────┘
```
