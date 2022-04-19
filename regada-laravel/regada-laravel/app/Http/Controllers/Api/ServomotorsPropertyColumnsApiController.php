<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServomotorsPropertyCollection;
use App\Http\Resources\ServomotorsPropertyColumnsCollection;
use App\Http\Resources\ServomotorsPropertySingleCollection;
use App\Models\AllowedCode;
use App\Models\Servomotor;
use App\Models\ServomotorProperty;
use App\Models\ServomotorPropertyColumn;
use Illuminate\Http\Request;

class ServomotorsPropertyColumnsApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $servomotors = ServomotorPropertyColumn::where('servomotor_id', $request->servomotor_id)->get()->groupBy('column_id');
        $servomotorProps = ServomotorProperty::where('servomotor_id', $request->servomotor_id)->get();
        $allowedCodes = AllowedCode::where('servomotor_id', $request->servomotor_id)->get()->groupBy('column_id');

        $rows = collect();
        $rowsNames = collect();
        $newCollection = collect();
        foreach ($servomotors as $items) {
            foreach ($items as $item) {
                $rows->put($item->row_id, $item->id);
                $rowsNames->put($item->row_id, $item->name);
            }
            $items->put('rows', $rows->sortKeys());
            $items->put('rowsNames', $rowsNames->sortKeys());
            $items->put('servomotorProps', $servomotorProps->whereIn('servomotor_property_column_id', $rows)->groupBy('code'));
            foreach ($items['servomotorProps']as $price) {
                $price->put('price', $price->first()->price);
                $price->put('code', $price->first()->code);

                if (isset($allowedCodes[$items->first()->column_id])) {
                    $price->put('allowed_codes', $allowedCodes[$items->first()->column_id]->where('code', $price->first()->code)->pluck('allowed_next_code', 'allowed_next_code'));
                } else {
                    $price->put('allowed_codes', []);
                }
            }

            $items->put('columnId', $items->first()->column_id);
            $rows = collect();
            $rowsNames = collect();
            $newCollection->push($items);
        }

        return response()->json($newCollection);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function ServomotorPropertiesIndex(Request $request)
    {
        $servomotor = ServomotorProperty::where('servomotor_id', $request->servomotor_id)->get()->groupBy(['code']);
        

        return response()->json($servomotor);
    }
}
