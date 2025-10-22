# API Documentation

## Overview

This document outlines the API endpoints for the Ascend Valet application.

## Authentication

All API requests require authentication via JWT token.

## Endpoints

### Customers

- `GET /api/customers` - Retrieve all customers
- `POST /api/customers` - Create a new customer
- `GET /api/customers/:id` - Get customer by ID
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer

### Services

- `GET /api/services` - Retrieve all services
- `POST /api/services` - Create a new service
- `GET /api/services/:id` - Get service by ID

### Schedules

- `GET /api/schedules` - Retrieve all schedules
- `POST /api/schedules` - Create a new schedule

## Error Handling

Standard HTTP status codes are used:
- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error
