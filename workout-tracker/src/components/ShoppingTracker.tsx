import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

function ShoppingTracker() {
  const [quantity, setQuantity] = useState(0);
  const itemInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = `Shopping Cart: ${quantity} Items`;
  }, [quantity]);

  function addItem() {
    setQuantity(quantity + 1);
  }

  function removeItem() {
    setQuantity(Math.max(0, quantity - 1));
  }

  function resetCart() {
    setQuantity(0);
  }

  function focusItemInput() {
    itemInputRef.current?.focus();
  }

  function getMessage() {
    if (quantity === 0) {
      return "Start shopping!";
    } else if (quantity < 5) {
      return "Nice picks so far!";
    } else {
      return "Bulk Order 🎉";
    }
  }

  const total = quantity * 24;

  return (
    <Card className="w-full max-w-md animate-[fadeInCard_0.6s_ease-out] border border-white/40 bg-white/90 shadow-[0_25px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-center text-3xl font-extrabold tracking-tight text-slate-900">
          Shopping Cart
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5 px-6 pb-6">
        <div>
          <p className="mb-2 font-semibold text-slate-700">Item Name</p>
          <Input
            ref={itemInputRef}
            placeholder="Enter item name"
            className="border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus-visible:border-emerald-400 focus-visible:ring-emerald-200"
          />
        </div>

        <div className="flex justify-center">
          <div
            key={quantity}
            className="flex min-w-[124px] items-center justify-center rounded-2xl bg-slate-100 px-5 py-4 text-5xl font-black text-slate-900 shadow-inner animate-[countPop_0.35s_ease-out]"
          >
            {quantity}
          </div>
        </div>

        {quantity > 0 && (
          <div className="flex justify-center">
            <Badge className="border-emerald-200 bg-emerald-100 text-emerald-700 shadow-sm animate-[badgeIn_0.35s_ease-out]">
              In Cart
            </Badge>
          </div>
        )}

        <p className="text-center text-sm font-medium text-slate-500">{getMessage()}</p>

        {quantity >= 5 && (
          <div className="flex justify-center">
            <div className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-orange-300/60 ring-2 ring-white/60 animate-pulse">
              Bulk Order 🎉
            </div>
          </div>
        )}

        <div className="text-center text-sm text-slate-600">
          Total: <span className="text-base font-bold text-slate-900">${total}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Button
            onClick={addItem}
            className="bg-green-600 text-white shadow-md transition-all duration-200 hover:bg-green-700 hover:scale-[1.05] active:scale-[0.95]"
          >
            + Add Item
          </Button>

          <Button
            onClick={removeItem}
            disabled={quantity === 0}
            className="bg-red-500 text-white shadow-md transition-all duration-200 hover:bg-red-600 hover:scale-[1.05] active:scale-[0.95] disabled:bg-slate-300 disabled:text-slate-500 disabled:hover:bg-slate-300 disabled:hover:scale-100"
          >
            - Remove Item
          </Button>

          <Button
            onClick={resetCart}
            className="bg-blue-600 text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:scale-[1.05] active:scale-[0.95]"
          >
            Reset Cart
          </Button>
        </div>

        <Button
          variant="outline"
          className="w-full border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:scale-[1.02] hover:bg-slate-50 active:scale-[0.98]"
          onClick={focusItemInput}
        >
          Focus Item Input
        </Button>
      </CardContent>
    </Card>
  );
}

export default ShoppingTracker;
