<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServomotorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('servomotor_property_columns')->insert([
            [
                'servomotor_id' => 1,
                'row_id' => 1,
                'column_id' => 1,
                'name' => 'Typ klímy'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 2,
                'column_id' => 1,
                'name' => 'Okolitá teplota'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 3,
                'column_id' => 1,
                'name' => 'Korózna kategória'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 4,
                'column_id' => 1,
                'name' => 'Krytie'
            ],
            //
            [
                'servomotor_id' => 1,
                'row_id' => 1,
                'column_id' => 2,
                'name' => 'Elektrické pripojenie'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 2,
                'column_id' => 2,
                'name' => 'Napájacie napätie'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 3,
                'column_id' => 2,
                'name' => 'Schéma zapojenia'
            ],
            //
            [
                'servomotor_id' => 1,
                'row_id' => 1,
                'column_id' => 3,
                'name' => 'Vypínací moment
                '
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 2,
                'column_id' => 3,
                'name' => 'Režim prevádzky Otvor-Zatvor'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 3,
                'column_id' => 3,
                'name' => 'Regulačná prevádzka'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 4,
                'column_id' => 3,
                'name' => 'Doba prestavenia 230 V, 220 V AC'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 5,
                'column_id' => 3,
                'name' => '[W] 230 V, 220 V AC'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 6,
                'column_id' => 3,
                'name' => 'Doba prestavenia 3x380, 3x400 V AC | 24 V AC/DC'
            ],
            //
            [
                'servomotor_id' => 1,
                'row_id' => 1,
                'column_id' => 4,
                'name' => 'Pracovný uhol'
            ],
            //
            [
                'servomotor_id' => 1,
                'row_id' => 1,
                'column_id' => 5,
                'name' => 'Vysielač polohy'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 2,
                'column_id' => 5,
                'name' => 'Zapojenie'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 3,
                'column_id' => 5,
                'name' => 'Výstup'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 4,
                'column_id' => 5,
                'name' => 'Schéma zapojenia'
            ],
            //
            [
                'servomotor_id' => 1,
                'row_id' => 1,
                'column_id' => 6,
                'name' => 'Mechanické pripojenie'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 2,
                'column_id' => 6,
                'name' => 'Tvar pripoj. dielca ISO'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 3,
                'column_id' => 6,
                'name' => 'Tvar pripoj. dielca Rozmer'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 4,
                'column_id' => 6,
                'name' => 'Rozmerový náčrt'
            ],
            //
            [
                'servomotor_id' => 1,
                'row_id' => 1,
                'column_id' => 7,
                'name' => 'Rozšírené vybavenie'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 2,
                'column_id' => 7,
                'name' => 'Schéma zapojenia 230 V AC'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 3,
                'column_id' => 7,
                'name' => 'Schéma zapojenia 3x400 V AC '
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 4,
                'column_id' => 7,
                'name' => 'Schéma zapojenia 24 V AC'
            ],
            [
                'servomotor_id' => 1,
                'row_id' => 5,
                'column_id' => 7,
                'name' => 'Schéma zapojenia 24 V DC'
            ],
                        //

                        [
                            'servomotor_id' => 1,
                            'row_id' => 7,
                            'column_id' => 3,
                            'name' => '[W] 3x380, 3x400 V AC | 24 V AC/DC (AC)'
                        ],
                        [
                            'servomotor_id' => 1,
                            'row_id' => 8,
                            'column_id' => 3,
                            'name' => '[W] 3x380, 3x400 V AC | 24 V AC/DC (AC/DC)'
                        ],
        ]);
    }
}
