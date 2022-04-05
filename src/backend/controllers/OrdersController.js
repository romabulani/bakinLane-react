import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Order History are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's order history.
 * send GET Request at /api/user/orders
 * */
export const getOrdersHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userOrders = schema.users.findBy({ _id: userId }).orders;
  return new Response(200, {}, { orders: userOrders });
};

/**
 * This handler handles adding order to user's order history.
 * send POST Request at /api/user/orders
 * body contains {order}
 * */

export const addItemToOrdersHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userOrders = schema.users.findBy({ _id: userId }).orders;
    const { order } = JSON.parse(request.requestBody);
    userOrders.push({
      order,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { orders: userOrders });
    return new Response(201, {}, { orders: userOrders });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
