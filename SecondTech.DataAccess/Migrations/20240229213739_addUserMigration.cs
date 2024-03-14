using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SecondTech.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class addUserMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "SoldProductId",
                table: "Characteristics",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    UserName = table.Column<string>(type: "TEXT", nullable: false),
                    PasswordHash = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Number = table.Column<string>(type: "TEXT", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: false),
                    Address = table.Column<string>(type: "TEXT", nullable: false),
                    Role = table.Column<string>(type: "TEXT", nullable: false),
                    DateTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Code = table.Column<string>(type: "TEXT", nullable: true),
                    Verified = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SoldProducts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<int>(type: "INTEGER", nullable: false),
                    CategoryId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    State = table.Column<string>(type: "TEXT", nullable: false),
                    ImgUrl = table.Column<string>(type: "TEXT", nullable: false),
                    ColorId = table.Column<Guid>(type: "TEXT", nullable: false),
                    BrandId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Storage = table.Column<string>(type: "TEXT", nullable: false),
                    Ram = table.Column<string>(type: "TEXT", nullable: false),
                    Model = table.Column<string>(type: "TEXT", nullable: false),
                    Processor = table.Column<string>(type: "TEXT", nullable: false),
                    Battery = table.Column<string>(type: "TEXT", nullable: false),
                    DateTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    SaleTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    UserId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoldProducts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoldProducts_Brands_BrandId",
                        column: x => x.BrandId,
                        principalTable: "Brands",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SoldProducts_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SoldProducts_Colors_ColorId",
                        column: x => x.ColorId,
                        principalTable: "Colors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SoldProducts_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PackageContentEntitySoldProductEntity",
                columns: table => new
                {
                    PackageContentsId = table.Column<Guid>(type: "TEXT", nullable: false),
                    SoldProductsId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PackageContentEntitySoldProductEntity", x => new { x.PackageContentsId, x.SoldProductsId });
                    table.ForeignKey(
                        name: "FK_PackageContentEntitySoldProductEntity_PackageContents_PackageContentsId",
                        column: x => x.PackageContentsId,
                        principalTable: "PackageContents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PackageContentEntitySoldProductEntity_SoldProducts_SoldProductsId",
                        column: x => x.SoldProductsId,
                        principalTable: "SoldProducts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Characteristics_SoldProductId",
                table: "Characteristics",
                column: "SoldProductId");

            migrationBuilder.CreateIndex(
                name: "IX_PackageContentEntitySoldProductEntity_SoldProductsId",
                table: "PackageContentEntitySoldProductEntity",
                column: "SoldProductsId");

            migrationBuilder.CreateIndex(
                name: "IX_SoldProducts_BrandId",
                table: "SoldProducts",
                column: "BrandId");

            migrationBuilder.CreateIndex(
                name: "IX_SoldProducts_CategoryId",
                table: "SoldProducts",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_SoldProducts_ColorId",
                table: "SoldProducts",
                column: "ColorId");

            migrationBuilder.CreateIndex(
                name: "IX_SoldProducts_UserId",
                table: "SoldProducts",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Characteristics_SoldProducts_SoldProductId",
                table: "Characteristics",
                column: "SoldProductId",
                principalTable: "SoldProducts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characteristics_SoldProducts_SoldProductId",
                table: "Characteristics");

            migrationBuilder.DropTable(
                name: "PackageContentEntitySoldProductEntity");

            migrationBuilder.DropTable(
                name: "SoldProducts");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Characteristics_SoldProductId",
                table: "Characteristics");

            migrationBuilder.DropColumn(
                name: "SoldProductId",
                table: "Characteristics");
        }
    }
}
